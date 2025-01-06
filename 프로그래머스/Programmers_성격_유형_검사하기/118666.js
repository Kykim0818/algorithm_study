function solution(survey, choices) {
    const personScore = {
        R: 0,
        T: 0,
        C: 0,
        F: 0,
        J: 0,
        M: 0,
        A: 0,
        N: 0,
    }
    processResearch(survey, choices);

    const answer = getPersonal(personScore);
    return answer;

    function processResearch(surveys, choices) {
        for (let i = 0; i < surveys.length; i++) {
            const first = surveys[i][0];
            const second = surveys[i][1];

            const score = choices[i];
            if (score === 4) continue;
            if (score < 4) {
                personScore[first] += (4 - score);
            } else {
                personScore[second] += (score - 4);
            }
        }
    }


    function getPersonal(score) {
        let answer = '';
        // 1
        if (score.R > score.T) {
            answer += 'R'
        } else if (score.R < score.T) {
            answer += 'T'
        } else {
            answer += 'R'
        }

        // 2
        if (score.C > score.F) {
            answer += 'C'
        } else if (score.C < score.F) {
            answer += 'F'
        } else {
            answer += 'C'
        }

        // 3
        if (score.J > score.M) {
            answer += 'J'
        } else if (score.J < score.M) {
            answer += 'M'
        } else {
            answer += 'J'
        }

        // 4
        if (score.A > score.N) {
            answer += 'A'
        } else if (score.A < score.N) {
            answer += 'N'
        } else {
            answer += 'A'
        }
        return answer;
    }
}



const survey = ["AN", "CF", "MJ", "RT", "NA"];
const choices = [5, 3, 2, 7, 5];


solution(survey, choices);

