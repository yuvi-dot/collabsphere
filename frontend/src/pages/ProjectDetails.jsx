import { useParams } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';
import { PlusIcon } from '@heroicons/react/24/outline';

const tasks = [
    { id: 1, title: 'Design Homepage', status: 'In Progress', assignee: 'John Doe', priority: 'High' },
    { id: 2, title: 'Implement Auth', status: 'Todo', assignee: 'Jane Smith', priority: 'Critical' },
    { id: 3, title: 'Setup CI/CD', status: 'Done', assignee: 'Mike Johnson', priority: 'Medium' },
];

export default function ProjectDetails() {
    const { id } = useParams();

    return (
        <div>
            <div className="md:flex md:items-center md:justify-between mb-8">
                <div className="flex-1 min-w-0">
                    <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                        Project Details (ID: {id})
                    </h2>
                </div>
                <div className="mt-4 flex md:mt-0 md:ml-4">
                    <Button>
                        <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                        New Task
                    </Button>
                </div>
            </div>

            <div className="bg-white shadow overflow-hidden sm:rounded-md">
                <ul role="list" className="divide-y divide-gray-200">
                    {tasks.map((task) => (
                        <li key={task.id}>
                            <div className="block hover:bg-gray-50">
                                <div className="px-4 py-4 sm:px-6">
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm font-medium text-primary-600 truncate">{task.title}</p>
                                        <div className="ml-2 flex-shrink-0 flex">
                                            <p className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${task.status === 'Done' ? 'bg-green-100 text-green-800' :
                                                    task.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                                                        'bg-gray-100 text-gray-800'
                                                }`}>
                                                {task.status}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-2 sm:flex sm:justify-between">
                                        <div className="sm:flex">
                                            <p className="flex items-center text-sm text-gray-500">
                                                Assignee: {task.assignee}
                                            </p>
                                        </div>
                                        <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                                            <p>Priority: {task.priority}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
