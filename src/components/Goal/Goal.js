import React, { useEffect, useState } from 'react';
import "../GameAria/_gameAria.scss"
import { gamePlayActions, gamePlaySelectors } from "../../Store/gamePlay";
import { connect, useDispatch, useSelector } from "react-redux";
import { moleActions, moleSelectors } from "../../Store/mole";

const Goal = ({ id }) => {
  let [ caught, setCaught ] = useState(false)
  let [ caughtID, setCaughtID ] = useState(-1)
  const lives = useSelector(gamePlaySelectors.getLives())
  // let caughtID = useSelector(moleSelectors.getCaughtMole())
  const activeMole = useSelector(moleSelectors.getActiveMole())
  const dispatch = useDispatch();


  useEffect(() => {
    return () => {
      if (caught && activeMole === caughtID) {
       return dispatch(gamePlayActions.setLives(1))
      }
    }
  }, [])

  useEffect(() => {
    if (lives < 1) {
      dispatch(gamePlayActions.setIsPlaying(false))
    }
  }, [ lives ])

  const catching = () => {
    setCaught(true)
    setCaughtID(id)
    dispatch(moleActions.setCaughtMole(id))
    dispatch(gamePlayActions.setScore(5))
  }

  const liveIncrement = () => {
    if (!caught) {
      dispatch(gamePlayActions.setLives(1))
    }
  }

  return (
    <>
      {
        caught
          ?
          null
          :
          <div
            onMouseDown={ catching }
            id={ id }
            className={ "goal active" }
          />
      }
    </>
  )
};


// class Goal extends React.Component {
//   state = {
//     didCaught: false,
//   }
//
//   catching = () => {
//     const {setCaughtMole, setScore, id} = this.props
//
//     this.setState({didCaught: true})
//     setCaughtMole(moleActions.setCaughtMole(id))
//     setScore(5)
//   }
//
//   // liveIncrement = () => {
//   //   const { id, caughtMole, setLives } = this.props
//   //
//   //   if (caughtMole !== id) {
//   //     setLives(1)
//   //   }
//   // }
//
//
//   componentWillUnmount() {
//     const { id, caughtMole, setLives } = this.props
//     if (caughtMole !== id) return setLives(1)
//   }
//
//   render() {
//     const { id } = this.props
//     const { didCaught } = this.state
//
//     return (
//       <>
//         {
//           didCaught
//             ?
//             null
//             :
//             <div
//               onMouseDown={ this.catching }
//               id={ id }
//               className={ "goal active" }
//             />
//         }
//       </>
//     );
//   }
// }
//
//
// const mapStateToProps = (state) => {
//   return {
//     caughtMole: moleSelectors.getCaughtMole()(state),
//   }
// }
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     setCaughtMole: (caughtMoleId) => dispatch(moleActions.setCaughtMole(caughtMoleId)),
//     setLives: (increment) => dispatch(gamePlayActions.setLives(increment)),
//     setScore: (increment) => dispatch(gamePlayActions.setScore(increment)),
//   }
// }

export default Goal;
