import { program } from 'commander';
import Realm from 'realm';
import inquirer from 'inquirer';
import chalk from 'chalk';
import { Developer } from '../model/Developer.js';
import { questions } from '../utils/helper.js';

const { prompt } = inquirer;


program
    .action(async () => {
        const answer = await (prompt(questions));
        
        const realm = await Realm.open({
            schema: [Developer],
        });
        
        realm.write(() => {
            const { UUID } = Realm.BSON;

            realm.create('Developer', {
                _id: new UUID(),
                name: answer.name,
                email: answer.email,
                category: answer.category,
                phone: answer.phone,
                days_to_attend: answer.days_to_attend[0]
            });
        });

        realm.close();

        console.log(chalk.green('✔ Inserted new deveoper'));
    })

program.parse(process.argv);