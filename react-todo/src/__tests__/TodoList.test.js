import {
	render,
	screen,
	fireEvent,
	test,
	describe,
	expect,
} from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
	test('renders initial todo items', () => {
		render(<TodoList />);
		expect(screen.getByText('Learn React')).toBeInTheDocument();
		expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
	});

	test('adds a new todo', () => {
		render(<TodoList />);
		const input = screen.getByPlaceholderText('Add new todo');
		fireEvent.change(input, { target: { value: 'Write tests' } });
		fireEvent.click(screen.getByText('Add Todo'));
		expect(screen.getByText('Write tests')).toBeInTheDocument();
	});

	test('toggles a todo item', () => {
		render(<TodoList />);
		const todoItem = screen.getByText('Learn React');
		fireEvent.click(todoItem);
		expect(todoItem).toHaveStyle('text-decoration: line-through');
		fireEvent.click(todoItem);
		expect(todoItem).not.toHaveStyle('text-decoration: line-through');
	});

	test('deletes a todo item', () => {
		render(<TodoList />);
		fireEvent.click(screen.getByText('Delete', { selector: 'button' }));
		expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
	});
});