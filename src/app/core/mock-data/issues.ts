import {Issue} from "../models";

export const mockIssues: Issue[] = [
  {
    issueNo: 1,
    title: 'Fix login bug',
    description: 'Users unable to log in due to authentication issue.',
    priority: 'high',
    type: 'Bug',
    completed: new Date('2023-11-01'),
  },
  {
    issueNo: 2,
    title: 'Add user profile page',
    description: 'Create a new page to display user profiles.',
    priority: 'high',
    type: 'Feature',
  },
  {
    issueNo: 3,
    title: 'Update documentation for API v2',
    description: 'Document changes and improvements in API version 2.',
    priority: 'low',
    type: 'Documentation',
  },
  {
    issueNo: 4,
    title: 'Improve error handling',
    description: 'Enhance the system to provide better error messages.',
    priority: 'medium',
    type: 'Feature'
  },
];
