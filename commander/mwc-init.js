import { program } from 'commander';
import Realm from 'realm';
import axios from 'axios';
import { Developer } from '../model/Developer.js';
import { MWC_DATA_URL } from '../utils/helper.js';
import { createSpinner } from 'nanospinner';

program
    .action(async () => {
        try{
            const spinner = createSpinner('Initializing data...').start();
            const developers =  (await axios.get(MWC_DATA_URL)).data;
            const realm = await Realm.open({
                schema: [Developer],
            });
            
            realm.write(() => {
                developers.forEach((developer) => {
                    realm.create('Developer', {
                        name: developer.name,
                        email: developer.email,
                        category: developer.category,
                        phone: developer.phone,
                        days_to_attend: developer.date
                    });
                });
            });

            realm.close();

            spinner.success({ text:'Data initialized!'});
        } catch(error){
            console.error(`\n💀 Initialization failed: ${error.message}`);
            process.exit(1);
        }
    });

program.parse(process.argv);