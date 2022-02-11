import { program } from 'commander';
import { Developer } from '../model/Developer.js';
import Realm from 'realm';

program
    //.argument('<name>')
    .option('-n, --name <test>', 'title to use before name')
    .option('-i, --integer <number>', 'integer argument')
    .action(async (/*name*/options) => {
        const realm = await Realm.open({
            schema: [Developer],
        });

        let developers = realm.objects("Developer");
        
        developers = developers.map(developer => {
            return ({ 
                'name': developer.name,
                'email': developer.email, 
                'category': developer.category,
                'phone': developer.phone,
                'attendance': developer.days_to_attend,
             });
        });

        console.table(developers);

        realm.close();
        
    });

program.parse(process.argv);
