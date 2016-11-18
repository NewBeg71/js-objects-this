'use strict';

const mcFaceRuns = {
  name: 'Person McFace',
  email: 'wdi@personmcface.com',
  runs: [
    {
      date: '2015-05-25 15:00',
      distance: 1200,
      timeTaken: 600,
    },
    {
      date: '2015-05-25 15:00',
      distance: 1400,
      timeTaken: 800,
    },
  ],
  totalDistance: function () {
    let runs = this.runs;
    let result = 0;
    for (let i=0; i<runs.length; ++i){
    result += runs[i].distance;
    return result;
    }
  },

  longestRun: function () {
    let runs = this.runs;
  },

//return result;

  averageSpeed: function () {
    //=totalDistance/totalTime
  },
};

//return

module.exports = mcFaceRuns;
