import React, { Component } from 'react'
import Navbar from './Navbar'


export default class CreateQuiz extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <div className="container createquiz">
          <div className="text-center">
            <h1>Create Quiz</h1>
          </div>
          <form>
            <div className="form-group">
              {/* <label for="exampleFormControlInput1">Email address</label> */}
              <input type="email" className="form-control" id="" placeholder="Enter Quiz Name" />
            </div>
            <div className="form-group">
              <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Enter Your Question" rows="3"></textarea>
            </div>

            <label for="exampleFormControlInput1">Enter 4 Options:</label>
            <div class="input-group mb-2 mr-sm-2">
              <div class="input-group-prepend">
                <div class="input-group-text">1</div>
              </div>
              <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="Enter Option 1 Here" />
            </div>
            <div class="input-group mb-2 mr-sm-2">
              <div class="input-group-prepend">
                <div class="input-group-text">2</div>
              </div>
              <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="Enter Option 2 Here" />
            </div>
            <div class="input-group mb-2 mr-sm-2">
              <div class="input-group-prepend">
                <div class="input-group-text">3</div>
              </div>
              <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="Enter Option 3 Here" />
            </div>
            <div class="input-group mb-2 mr-sm-2">
              <div class="input-group-prepend">
                <div class="input-group-text">4</div>
              </div>
              <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="Enter Option 4 Here" />
            </div>

            <div className="form-group">

              <label for="exampleFormControlSelect1" id="">Choose Correct Answer Number Here:</label>
              <select className="form-control" id="exampleFormControlSelect1">
                <option>None</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>

            <label for="exampleFormControlSelect1">Time interval for this question:</label>
            <div className="d-flex">
              <input type="text" class="form-control mb-2 mr-sm-2 d-inline" id="inlineFormInputName2" placeholder="Start Timing" />
              <input type="text" class="form-control mb-2 mr-sm-2 d-inline" id="" placeholder="Duration" />
            </div>

            <div className="text-center">
              <button type="button" class="btn btn-primary mt-2">Save and Add another question</button>
              <br />
              <button type="button" class="btn btn-outline-primary mt-3">View all your saved questions </button>
            </div>


          </form>
        </div>






        {/* show-all-saved-quetions-below */}
        <div className="saved-quetions container my-5">
          {/* Question 1 */}
          <div className="dvQuestion my-5">
            <h5>Question 1:</h5>
            <p>How many days in a week</p>
            <div class="input-group mb-2 mr-sm-2">
              <div class="input-group-prepend">
                <div class="input-group-text">1</div>
              </div>
              <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="5 days" disabled />
            </div>

            <div class="input-group mb-2 mr-sm-2">
              <div class="input-group-prepend">
                <div class="input-group-text">2</div>
              </div>
              <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="6 days" disabled />
            </div>
            <div class="input-group mb-2 mr-sm-2 border border-success">
              <div class="input-group-prepend ">
                <div class="input-group-text ">3</div>
              </div>
              <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="7 days" disabled />
            </div>
            <div class="input-group mb-2 mr-sm-2">
              <div class="input-group-prepend">
                <div class="input-group-text">4</div>
              </div>
              <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="8 days" disabled />
            </div>
          </div>{/* dvQuestion end */}

          {/* Question 2 */}
          <div className="dvQuestion my-5">
            <h5>Question 2:</h5>
            <p>How many days in a week</p>
            <div class="input-group mb-2 mr-sm-2">
              <div class="input-group-prepend">
                <div class="input-group-text">1</div>
              </div>
              <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="5 days" disabled />
            </div>

            <div class="input-group mb-2 mr-sm-2">
              <div class="input-group-prepend">
                <div class="input-group-text">2</div>
              </div>
              <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="6 days" disabled />
            </div>
            <div class="input-group mb-2 mr-sm-2 border border-success">
              <div class="input-group-prepend ">
                <div class="input-group-text ">3</div>
              </div>
              <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="7 days" disabled />
            </div>
            <div class="input-group mb-2 mr-sm-2">
              <div class="input-group-prepend">
                <div class="input-group-text">4</div>
              </div>
              <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="8 days" disabled />
            </div>
          </div>{/* dvQuestion end */}
        </div>
      </div>
    )
  }
}
