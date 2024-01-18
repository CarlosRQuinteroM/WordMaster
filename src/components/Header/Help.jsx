import styled from "styled-components";

function Help() {
  return (
    <>
      <ModalStyled>
        <div className="top">How to play</div>
        <div className="data">
          <div className="cont">
            <div className="info">
              <div className="text">
                You have to guess the hidden word in 6 tries, and the color of
                the letters changes to show how close you are.<br></br>
              </div>
              <div className="text">
                To start the game, just enter any word, for example:
              </div>
              <div className="flex word">
                <div className="letter word">T</div>
                <div className="letter word yellow_letter">A</div>
                <div className="letter word">B</div>
                <div className="letter word yellow_letter">L</div>
                <div className="letter word green_letter">E</div>
              </div>
              <div className="text text-tiles">
                <b className="grey_text">T</b>, <b className="grey_text">B</b>
                {" aren't in the target word at all."}
                <br />
                <b className="yellow_text">A</b>,
                <b className="yellow_text">L</b>
                {" is in the word but in the wrong spot."}
                <br />
                <b className="green_text">E</b>
                {" is in the word and in the correct spot."}
                <br />
              </div>
              <div className="text">
                {"Another try to find matching letters in the target word."}
              </div>
              <div className="flex word">
                <div className="letter word green_letter">F</div>
                <div className="letter word green_letter">L</div>
                <div className="letter word green_letter">A</div>
                <div className="letter word">S</div>
                <div className="letter word">H</div>
              </div>
              <div className="text">So close!</div>
              <div className="flex word">
                <div className="letter word green_letter">F</div>
                <div className="letter word green_letter">L</div>
                <div className="letter word green_letter">A</div>
                <div className="letter word green_letter">M</div>
                <div className="letter word green_letter">E</div>
              </div>
              <div className="text">
                <b>Got it! 🏆</b>
              </div>
            </div>
          </div>
        </div>
      </ModalStyled>
    </>
  );
}

export default Help;

const ModalStyled = styled.div`
  position: relative;
  left: 50%;
  height: 100%;
  width: 100%;
  max-width: 760px;
  margin: 0 auto;
  transform: translateX(-50%);
  border-radius: 7px;
  z-index: 1000;

  .top {
    color: #2e3239;
    font-size: 18px;
    font-weight: 700;
    border-radius: 7px;
    display: flex;
    min-height: 38px;
    padding: 0 25px;
    text-align: center;
    background: #e5ecff;
    justify-content: center;
    align-items: center;
    align-content: center;
  }

  .data {
    padding: 10px 0 20px;
  }

  .cont {
    max-width: 580px;
    padding: 0 10px;
  }

  .word {
    margin-bottom: 6px;
    margin-left: 6px;
  }

  .info {
    padding-top: 5px;
    text-align: center;
  }

  .text {
    color: #2e3239;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 10px;
  }

  .flex {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .letter {
    color: #fff;
    font-size: 28px;
    font-weight: 700;
    display: flex;
    width: 54px;
    height: 54px;
    text-align: center;
    border-radius: 5px;
    background: #a4aec4;
    justify-content: center;
    align-items: center;
  }

  .yellow_letter {
    background-color: #f3c237 !important;
  }

  .green_letter {
    background-color: #79b851 !important;
  }

  .text-tiles {
    line-height: 32px;
    text-align: left;
    margin: 0 60px 10px;
    padding: 10px 15px;
    background: #edf0f5;
    border-radius: 10px;
  }

  .grey_text {
    color: #fff !important;
    padding: 2px 6px;
    border-radius: 3px;
    background: #a4aec4;
  }

  .yellow_text {
    color: #fff !important;
    padding: 2px 6px;
    border-radius: 3px;
    background: #f3c237;
  }

  .green_text {
    color: #fff !important;
    padding: 2px 6px;
    border-radius: 3px;
    background: #79b851;
  }
`;
