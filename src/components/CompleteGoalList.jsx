import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completeGoalRef } from '../firebase';
import { setCompletedGoals } from '../actions';
import GoalItem from './GoalItem';

class CompleteGoalList extends Component {

    componentDidMount() {
        completeGoalRef.on('value', snap => {

            let completedGoals = [];
            snap.forEach(completedGoal => {
                const { email, title } = completedGoal.val();
                const serverKey = completedGoal.key;
                completedGoals.push({email, title, serverKey});

            })
            
            this.props.setCompletedGoals(completedGoals);
        })
    }

    clearAllGoals() {
        completeGoalRef.set([]);
    }

    render() {
        console.log('completedGoals', this.props.completedGoals);
        return(
              <div>
                  {
                      this.props.completedGoals.map((completedGoal, index) => {
                            const { email, title } = completedGoal;
                            return (
                                <div key={index}><strong>{title}</strong> completed by <em>{email}</em></div>
                            )

                          
                      })
                  }
                  <button className="btn  btn-primary" onClick={ () => this.clearAllGoals()}>
                        Clear All
                  </button>
              </div>
            )
            }    
    }


function mapStateToProps(state) {
    const { completedGoals } = state;
    return {
        completedGoals
    }
}
export default connect(mapStateToProps, { setCompletedGoals })(CompleteGoalList);