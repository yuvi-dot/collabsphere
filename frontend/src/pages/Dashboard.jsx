import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';
import { PlusIcon } from '@heroicons/react/24/outline';

const projects = [
    { id: 1, name: 'Website Redesign', description: 'Redesigning the corporate website.', members: 4, tasks: 12 },
    { id: 2, name: 'Mobile App', description: 'Developing the iOS and Android apps.', members: 6, tasks: 24 },
    { id: 3, name: 'Marketing Campaign', description: 'Q4 Marketing strategy and execution.', members: 3, tasks: 8 },
];

export default function Dashboard() {
    return (
        <div>
            <div className="md:flex md:items-center md:justify-between mb-8">
                <div className="flex-1 min-w-0">
                    <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                        Dashboard
                    </h2>
                </div>
                <div className="mt-4 flex md:mt-0 md:ml-4">
                    <Button>
                        <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                        New Project
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <Card key={project.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                        <div className="flex items-start justify-between">
                            <h3 className="text-lg font-medium text-gray-900">{project.name}</h3>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                Active
                            </span>
                        </div>
                        <p className="mt-2 text-sm text-gray-500 line-clamp-2">
                            {project.description}
                        </p>
                        <div className="mt-4 border-t border-gray-200 pt-4 flex justify-between items-center text-sm text-gray-500">
                            <div className="flex items-center space-x-1">
                                <span>{project.members} members</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <span>{project.tasks} tasks</span>
                            </div>
                        </div>
                        <div className="mt-4">
                            <Link to={`/projects/${project.id}`} className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                                View Project &rarr;
                            </Link>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
