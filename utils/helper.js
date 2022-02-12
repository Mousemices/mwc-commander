import inquirer from 'inquirer';

const MWC_DATA_URL = 'https://challenges-asset-files.s3.us-east-2.amazonaws.com/data_sets/mwc22.json';

const DEVELOPER_FIELD = [
  'name',
  'email',
  'category',
  'phone',
  'days_to_attend'
]

const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Developer\'s name',
        required: true
    },
    {
        type: 'input',
        name: 'email',
        message: 'Developer\'s email address',
        validate(email) {
          const isValid = email.match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );

          if(isValid) {
            return true;
          }

          return 'Please enter a valid email address';
        }
    },
    {
        type: 'input',
        name: 'phone',
        message: 'Developer\'s phone',
        validate(phone) {
            const isValid = phone.match(
                /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g
            );

            if(isValid) {
              return true;
            }

            return 'Please enter a valid phone number';
        }
    },
    {
        type: 'checkbox',
        message: 'Select day to attend',
        name: 'days_to_attend',
        choices: [
          new inquirer.Separator('--- Attendance date ---'),
          {
            name: 'Feb 28, 2021'
          },
          {
            name: 'Mar 1, 2021',
          },
          {
            name: 'Mar 2, 2021',
          },
          {
            name: 'Mar 3, 2021',
          }
        ],
        validate(answer) {
            if (answer.length < 1) {
                return 'You must choose at least one day to attend.';
            }
  
            return true;
        },
      },
    {
        type: 'list',
        name: 'category',
        message: 'Developer\'s category',
        choices: ['Front', 'Back', 'Mobile', 'Data'],
        required: true
    }
]

export {
    MWC_DATA_URL,
    questions,
    DEVELOPER_FIELD
};