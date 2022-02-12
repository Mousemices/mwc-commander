import { program } from 'commander';
import Realm from 'realm';
import { Developer } from '../model/Developer.js';
import { DEVELOPER_FIELD } from '../utils/helper.js'

program
    .option('-o,--orderBy <field>', 'Order list by specifying the field')
    .action(async (options) => {
        console.log(options);

        let field = '';

        if(DEVELOPER_FIELD.includes(options.orderBy)) {
            field = options.orderBy;
        }

        const realm = await Realm.open({
            schema: [Developer],
        });

        let developers = field == '' ? 
                            realm.objects('Developer') : 
                            realm.objects('Developer').sorted(field);
        
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
