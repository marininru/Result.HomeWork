import './App.css';
import { Task1 } from './tasks/hw1/Task1';
import { Task2 } from './tasks/hw1/Task2';
import { Task3 } from './tasks/hw1/Task3';
import { Task4 } from './tasks/hw1/Task4';
import { Task5 } from './tasks/hw1/Task5';
import { Task6 } from './tasks/hw1/Task6';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h3>Задание 1</h3>
                <Task1 />
                <h3>Задание 2</h3>
                <Task2 />
                <h3>Задание 3</h3>
                <Task3 />
                <h3>Задание 4</h3>
                <Task4 />
                <h3>Дополнительное задание 1</h3>
                <Task5 />
                <h3>Дополнительное задание 2</h3>
                <Task6 />
            </header>
        </div>
    );
}

export default App;
