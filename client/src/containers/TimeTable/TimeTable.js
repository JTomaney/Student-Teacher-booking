import React, { Component } from "react";


export class TimeTable extends Component {
  state = {
 
  };

  render() {
   
    return (
      <div>
      <div className="tutor_header">
        <img className="tutor_image"></img>
        <h1 className="tutor_timetable_header" scr="../public/avatar-3.png">Book a one-to-one with Rhys</h1>

      </div>
        <div className="calendar">
        <div className="month-indicator">
          <time datetime="2019-01"> January 2019 </time>
        </div>
        <div className="day-of-week">
          <div>S</div>
          <div>M</div>
          <div>T</div>
          <div>W</div>
          <div>T</div>
          <div>F</div>
          <div>S</div>
        </div>
        <div className="date-grid">
          <button>
            <time datetime="2019-02-01">1</time>
          </button>
          <button>
            <time datetime="2019-02-02">2</time>
          </button>
          <button>
            <time datetime="2019-02-03">3</time>
          </button>
          <button>
            <time datetime="2019-02-04">4</time>
          </button>
          <button>
            <time datetime="2019-02-05">5</time>
          </button>
          <button>
            <time datetime="2019-02-06">6</time>
          </button>
          <button>
            <time datetime="2019-02-07">7</time>
          </button>
          <button>
            <time datetime="2019-02-08">8</time>
          </button>
          <button>
            <time datetime="2019-02-09">9</time>
          </button>
          <button>
            <time datetime="2019-02-10">10</time>
          </button>
          <button>
            <time datetime="2019-02-11">11</time>
          </button>
          <button>
            <time datetime="2019-02-12">12</time>
          </button>
          <button>
            <time datetime="2019-02-13">13</time>
          </button>
          <button>
            <time datetime="2019-02-14">14</time>
          </button>
          <button>
            <time datetime="2019-02-15">15</time>
          </button>
          <button>
            <time datetime="2019-02-16">16</time>
          </button>
          <button>
            <time datetime="2019-02-17">17</time>
          </button>
          <button>
            <time datetime="2019-02-18">18</time>
          </button>
          <button>
            <time datetime="2019-02-19">19</time>
          </button>
          <button>
            <time datetime="2019-02-20">20</time>
          </button>
          <button>
            <time datetime="2019-02-21">21</time>
          </button>
          <button>
            <time datetime="2019-02-22">22</time>
          </button>
          <button>
            <time datetime="2019-02-23">23</time>
          </button>
          <button>
            <time datetime="2019-02-24">24</time>
          </button>
          <button>
            <time datetime="2019-02-25">25</time>
          </button>
          <button>
            <time datetime="2019-02-26">26</time>
          </button>
          <button>
            <time datetime="2019-02-27">27</time>
          </button>
          <button>
            <time datetime="2019-02-28">28</time>
          </button>
        </div>
      </div>
      </div>
    );
  };

}
  
  export default TimeTable;
  