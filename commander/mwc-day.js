import { program } from 'commander';
import Realm from 'realm';
import { Developer } from '../model/Developer.js';

program
    .action(async () => {
        const realm = await Realm.open({
            schema: [Developer],
        });

        const developers = realm.objects('Developer');

        const distinctDays = [...new Set(developers.map(developer => developer.days_to_attend))];

        console.table(distinctDays);

        realm.close();
    });

program.parse(process.argv);