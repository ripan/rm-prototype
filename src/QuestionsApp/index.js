import React, { Component } from 'react';

const API = 'https://acceptance.int-my.raremark.com/api/v1/registration/consents';

class QuestionsApp extends Component {
  constructor(props) {
    super(props);
    this.state = { questions: [], allChoices: [] };
  }

  componentDidMount() {
    let _ = require('underscore')
   
    // As Queston/Choices API is gated i am using the consents API and editing the response //
    fetch(API)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => this.setState({ questions: _.sample(apiQuestionResponse.data,2), allChoices: apiQuestionResponse.included }))
      .catch(error => "Something went wrong");
  }

  render() {
    return (
      <div>
        <h2>Question/Choices</h2>
        <QuestionsList questions={this.state.questions} allChoices={this.state.allChoices}/>
      </div>
    );
  }

}

class QuestionsList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.questions.map(item => (
          <div key={item.id}>
          <h3>{item.attributes.title}</h3>
          <ChoicesList choices={item.relationships.choices.data} allChoices={this.props.allChoices}/>
          </div>
        ))}
      </ul>
    );
  }
}

class ChoicesList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.choices.map(item => (
          <Choice choice={item} allChoices={this.props.allChoices} key={item.id}/>
        ))}
      </ul>
    );
  }
}


class Choice extends React.Component {
  
  getChoice(choice_id) {
  let _ = require('underscore')
   console.log(this.props.allChoices)
   var selectedChoice = _.findWhere(this.props.allChoices, {id: choice_id})
   var selectedChoiceLabel = selectedChoice.attributes.label
   return selectedChoiceLabel
  }
  
  render() {
    return (
      <li>
      <input type='radio' name="choice_id" id={this.props.choice.id} value={this.props.choice.id} />
      {this.getChoice(this.props.choice.id)}
      </li>
    );
  }
}

export default QuestionsApp;

let apiQuestionResponse = {
  "data": [{
      "id": "499896f8-567b-47d4-a4ec-98950a5d25d6",
      "type": "question",
      "attributes": {
        "title": "How well do you understand sickle cell disease? "
      },
      "relationships": {
        "choices": {
          "data": [{
              "id": "5f821086-40b1-4d71-8f58-29cbffc1f50e",
              "type": "choice"
            },
            {
              "id": "b6bedd3e-a6c0-4c1b-83dc-a6c127bbdc73",
              "type": "choice"
            },
            {
              "id": "18d0e692-c484-4de1-a408-7b8238ec928d",
              "type": "choice"
            },
            {
              "id": "e790e33f-f863-4a95-96af-0702817fcadf",
              "type": "choice"
            },
            {
              "id": "8416782f-28ad-48cb-bcd8-5b51e012c449",
              "type": "choice"
            }
          ]
        }
      }
    },
    {
      "id": "23234234-567b-47d4-a4ec-345345345345",
      "type": "question",
      "attributes": {
        "title": "How are you today"
      },
      "relationships": {
        "choices": {
          "data": [{
              "id": "2342353-23423-4234-23423-4234234",
              "type": "choice"
            },
            {
              "id": "42342342-3423-423-4234-234",
              "type": "choice"
            }
          ]
        }
      }
    }
  ],
  "included": [{
      "id": "5f821086-40b1-4d71-8f58-29cbffc1f50e",
      "type": "choice",
      "attributes": {
        "label": "I have little/no understanding",
        "value": "1"
      }
    },
    {
      "id": "b6bedd3e-a6c0-4c1b-83dc-a6c127bbdc73",
      "type": "choice",
      "attributes": {
        "label": "Not well",
        "value": "2"
      }
    },
    {
      "id": "18d0e692-c484-4de1-a408-7b8238ec928d",
      "type": "choice",
      "attributes": {
        "label": "To some extent",
        "value": "3"
      }
    },
    {
      "id": "e790e33f-f863-4a95-96af-0702817fcadf",
      "type": "choice",
      "attributes": {
        "label": "Well",
        "value": "4"
      }
    },
    {
      "id": "8416782f-28ad-48cb-bcd8-5b51e012c449",
      "type": "choice",
      "attributes": {
        "label": "Very well",
        "value": "5"
      }
    },
    {
      "id": "2342353-23423-4234-23423-4234234",
      "type": "choice",
      "attributes": {
        "label": "Low",
        "value": "1"
      }
    },
    {
      "id": "42342342-3423-423-4234-234",
      "type": "choice",
      "attributes": {
        "label": "Medium",
        "value": "2"
      }
    }
  ],
  "meta": {
    "total_count": 2,
    "current_page": 1,
    "first_page": true,
    "last_page": true
  }
}