import React, { Component } from 'react'
import { Button, Col } from 'react-bootstrap'
import { connect } from 'react-redux';
import Question from './subcomponents/Question'
import {REFLECTIVE_AND_COMPLEX_GENRES, INTENSE_AND_REBELLIOUS_GENRES, UPBEAT_AND_CONVENTIONAL_GENRES, ENERGETIC_AND_RHYTHMIC_GENRES} from './constants'


let questionCategories = {
  INVOLVEMENT_LEVEL: "involvement_level",
  COPING: "coping",
  PERSONAL_IDENTITY: "personal_identity",
  SOCIAL_IDENTITY: "social_identity",
  MOOD_ENHANCEMENT: "mood_enhancement"
}





class MutualMelodiesPreferenceQuiz extends Component {

  constructor(props) {
    super(props);

    this.state = {
      error: "",
      preferenceCode: "",
      questions: [
        {
          text: "Music helps me get through my life",
          category: questionCategories.COPING,
        },
        {
          text: "With music I feel less lonely when alone",
          category: questionCategories.COPING,
        },
        {
          text: "I always play music when I feel sad",
          category: questionCategories.COPING,
        },
        {
          text: "With music I can vent aggression",
          category: questionCategories.COPING,
        },
        {
          text: "I find it important that my friends listen to the same music",
          category: questionCategories.SOCIAL_IDENTITY,
        },
        {
          text: "I can’t be friends with someone who dislikes my music",
          category: questionCategories.SOCIAL_IDENTITY,
        },
        {
          text: "My friends have the same music taste as I do",
          category: questionCategories.SOCIAL_IDENTITY,
        },
        {
          text: "I recognize myself in the lyrics of my favourite artists",
          category: questionCategories.PERSONAL_IDENTITY,
        },
        {
          text: "Lyrics of my music often express how I feel",
          category: questionCategories.PERSONAL_IDENTITY,
        },
        {
          text: "My favourite artists have ideas that appeal to me",
          category: questionCategories.PERSONAL_IDENTITY,
        },
        {
          text: "Artists are an example to me",
          category: questionCategories.PERSONAL_IDENTITY,
        },
        {
          text: "Music makes other things less boring",
          category: questionCategories.MOOD_ENHANCEMENT,
        },
        {
          text: "Music helps against boredom",
          category: questionCategories.MOOD_ENHANCEMENT,
        },
        {
          text: "Music creates a good atmosphere when with others",
          category: questionCategories.MOOD_ENHANCEMENT,
        },
        {
          text: "Music helps me to relax and stop thinking about things",
          category: questionCategories.MOOD_ENHANCEMENT,
        },
        {
          text: "I am always looking for new music",
          category: questionCategories.INVOLVEMENT_LEVEL,
        },
        {
          text: "I know more than peers about music",
          category: questionCategories.INVOLVEMENT_LEVEL,
        },
        {
          text: "I influence my friends with my music taste",
          category: questionCategories.INVOLVEMENT_LEVEL,
        },
        {
          text: "Can’t live without music",
          category: questionCategories.INVOLVEMENT_LEVEL,
        },
      ]
    }

    this.updateQuizQuestionResult = this.updateQuizQuestionResult.bind(this)
  }


  updateQuizQuestionResult(index, value) {
    let questions = [...this.state.questions]
    let newQuestion = {
      ...this.state.questions[index],
      value: value
    }

    questions[index] = newQuestion;

    this.setState({questions})
  }


  async getMusicDimensionScores() {
    let topArtists = await this.props.api.getMyTopArtists({limit: 50, time_range: "long_term" })
    let dimensionScores = {
      RC: 0,
      IR: 0,
      UC: 0,      
      ER: 0 
    }

    topArtists.body.items.forEach((artist) => {
      for (let i = 0; i < artist.genres.length; i++) {
        let genre = artist.genres[i];

        if (genre.indexOf("jazz") !== -1 || genre.indexOf("blues") !== -1 || genre.indexOf("classical") !== -1 || 
            genre.indexOf("folk") !== -1) {
          dimensionScores.RC++;
        } else if (genre.indexOf("rock") !== -1 || genre.indexOf("alt") !== -1 || genre.indexOf("metal") !== -1) {
          dimensionScores.IR++;
        } else if (genre.indexOf("country") !== -1 || genre.indexOf("soundtracks") !== -1 || genre.indexOf("pop") !== -1 || 
                   genre.indexOf("gospel") !== -1) {
          dimensionScores.UC++;
        } else if (genre.indexOf("rap") !== -1 || genre.indexOf("hip hop") !== -1 || genre.indexOf("soul") !== -1 || 
                   genre.indexOf("funk") !== -1 || genre.indexOf("edm") !== -1 || genre.indexOf("electronic") !== -1 || 
                   genre.indexOf("dance") !== -1 || genre.indexOf("house") !== -1 || genre.indexOf("techno") !== -1) {
          dimensionScores.ER++;
        }
      }
    })

    let highestScoringKey = Object.keys(dimensionScores).reduce(function (prev, key) {
      if (!prev) {
        return key
      } else if (dimensionScores[key] > dimensionScores[prev]) {
        return key
      } else {
        return prev
      }
    }, null)

    return {
      highestDimension: highestScoringKey,
      ...dimensionScores
    }
  }




  async calculateMusicPreferenceCode() {

    if (this.state.questions.some((question) => { return question.value == null })) {
      this.setState({error: "Must complete all the questions."})
      return
    } else {
      this.setState({error: ""})
    }


    
    let scoredMusicUseCases = this.getSortedMusicUseAverages()
    let involvementLevelCode = this.getInvolvementLevelScore();

    let genreDataScore = await this.getMusicDimensionScores()

    this.setState({preferenceCode: `${involvementLevelCode}-${scoredMusicUseCases[0].code}${scoredMusicUseCases[1].code}-${genreDataScore.highestDimension}`})
    window.scrollTo({top: 0, left: 0, behavior: "smooth"})
    document.getElementById('code-explanation').classList.remove('d-none')
  }


  getInvolvementLevelScore() {
    let involvementQuestions = this.state.questions.filter((question) => question.category == questionCategories.INVOLVEMENT_LEVEL)
    let involvementAvg = (involvementQuestions.reduce((total, question) => { return total + question.value }, 0)) / involvementQuestions.length

    if (involvementAvg < 1) {
      return "L"
    } else if (involvementAvg < 3) {
      return "M"
    } else {
      return "H"
    }
  }

  getSortedMusicUseAverages() {
    let copingQuestions = this.state.questions.filter((question) => question.category == questionCategories.COPING)
    let moodEnhancementQuestions = this.state.questions.filter((question) => question.category == questionCategories.MOOD_ENHANCEMENT)
    let socialIdentityQuestions = this.state.questions.filter((question) => question.category == questionCategories.SOCIAL_IDENTITY)
    let personalIdentityQuestions = this.state.questions.filter((question) => question.category == questionCategories.PERSONAL_IDENTITY)

    let copingAvg = (copingQuestions.reduce((total, question) => { return total + question.value }, 0)) / copingQuestions.length
    let moodEnhancementAvg = (moodEnhancementQuestions.reduce((total, question) => { return total + question.value }, 0)) / moodEnhancementQuestions.length
    let socialIdentityAvg = (socialIdentityQuestions.reduce((total, question) => { return total + question.value }, 0)) / socialIdentityQuestions.length
    let personalIdentityAvg = (personalIdentityQuestions.reduce((total, question) => { return total + question.value }, 0)) / personalIdentityQuestions.length

    let musicUseAverages = [{ 
        "code": "Co",
        "category": questionCategories.COPING, 
        "avg": copingAvg 
      }, {
        "code": "Me",
        "category": questionCategories.MOOD_ENHANCEMENT, 
        "avg": moodEnhancementAvg 
      }, {
        "code": "Si",
        "category": questionCategories.SOCIAL_IDENTITY, 
        "avg": socialIdentityAvg 
      }, {
        "code": "Pi",
        "category": questionCategories.PERSONAL_IDENTITY, 
        "avg": personalIdentityAvg 
      } ].sort((a, b) => { return b.avg - a.avg; })

    return musicUseAverages
  } 


  render() {
    return (
      <Col xs={12} className="mt-5">

      <div className="mb-5">
        <h3> Mutual Melodies Music Preference Quiz </h3>
        <p>
          This quiz is designed to give you an understanding of your music preference and what it is made up of. 
          The quiz determines the music you listen to using the data we get from your Spotify, and the answers to the questions below.
          There are a few sections to the music preference code.
        </p>

      </div>

      <div className="text-center my-5">
        <h1>{this.state.preferenceCode}</h1>
      </div>

      <div>
        <ul id="code-explanation" className="d-none">
          <li> 
            <p className="mb-0"><strong>First Section: Involvement Level</strong></p>
            <p >This first section measures how important music is to you and how involved you are. The options are H,M & L (High, Medium, & Low).</p>
          </li>
          <li> 
          <p className="mb-0"><strong>Second Section: 2 Main Usages for Music.</strong></p>
          <p>This second section shows you your main uses for music, based on your quiz respones. The options are:</p>
          <ul>
            <li>
              <p className="mb-0"><strong>Coping (Co)</strong></p>
              <p>You use music to manage and cope with your emotions, almost like a tool.</p>
            </li>
            <li>
              <p className="mb-0"><strong>Mood Enhancement (Me)</strong></p>
              <p>Similar to coping, you use music as a tool to manage your moods while doing other things, like homework.</p>
            </li>
            <li>
              <p className="mb-0"><strong>Personal Identity (Pi)</strong></p>
              <p>You use music to make an identity for yourself, and you see yourself in the music you listen to.</p>
            </li>
            <li>
              <p className="mb-0"><strong>Social Identity (Si)</strong></p>
              <p>You use music to create your social identity among your peers.</p>
            </li>
          </ul>
          </li>
          <li> 
          <p className="mb-0"><strong>Third Section: Most Prominent Music Dimension</strong></p>
          <p>This last section shows you the music dimension that your music falls into. The options are:</p>
          <ul>
            <li>
              <p className="mb-0"><strong>Reflective and Complex (RC)</strong></p>
              <p>This dimension includes genres like blues, jazz, classical, & folk music.</p>
            </li>
            <li>
              <p className="mb-0"><strong>Intense and Rebellious (IR)</strong></p>
              <p>This dimension includes genres like rock, alternative, & heavy metal.</p>
            </li>
            <li>
              <p className="mb-0"><strong>Upbeat and Conventional (UC)</strong></p>
              <p>This dimension includes genres like country, soundtracks, religious, & pop music</p>
            </li>
            <li>
              <p className="mb-0"><strong>Energetic and Rhythmic (ER)</strong></p>
              <p>This dimension includes genres like rap/hip-hop, soul/funk, & electronic/dance music.</p>
            </li>
          </ul>
          </li>
        </ul>
      </div>
        
      <div className="mt-5">
        {this.state.questions.map((question, index) => {
          return <Question 
                    id={`question--${index}`} 
                    index={index} 
                    key={index} 
                    text={question.text} 
                    category={question.category} 
                    updateQuestionResult={this.updateQuizQuestionResult}
                  />
        })}
      </div>
       
      <div className="d-flex mb-5">
      <Button
          className="pn-primary-button"
          onClick={this.calculateMusicPreferenceCode.bind(this)}
        >GENERATE PREFERENCE CODE</Button>
          <h5 className="text-danger">{this.state.error}</h5>
      </div>
          
      </Col>
    )
  }
}


const mapStateToProps = state => {
  return {
    api: state.api ? state.api.spotifyApi : null
  };
};

export default connect(mapStateToProps)(MutualMelodiesPreferenceQuiz)