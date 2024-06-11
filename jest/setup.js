import '@testing-library/jest-dom';
import {configure} from '@testing-library/react';
import replaceAllInserter from 'string.prototype.replaceall';

configure({testIdAttribute: 'data-qa'});

replaceAllInserter.shim();
