#!/usr/bin/env node

import { program } from 'commander';
import { MWC_DATA_URL } from '../utils/helper.js';

program.name('mwc')
    .version('1.0.6')
    .description('Mobile World Conference cli')
    .command('init', `Insert MWC data into database from --${MWC_DATA_URL}`).alias('i')
    .command('list', 'Show a list of developers who will be attending MWC').alias('l')
    .command('add', 'Add a new developer who will be attending MWC').alias('a')
    .command('day', 'Show the number of days available for MWC');

program.parse(process.argv);