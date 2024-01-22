import {useState} from 'react';

import { CORE_CONCEPTS, EXAMPLES } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
  const [ selectedTopic, setSelectedTopic] = useState();
  
  function handleSelect (selectedButton){
    //selectedButton =>'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton)
  }

  let tabContent = <p>Please select a topic.</p>

  if (selectedTopic && EXAMPLES[selectedTopic]) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <section id ="core-concepts">
          <h2>Core Concepts</h2>
          <ul>     
            {CORE_CONCEPTS.map ((conceptItem) => 
            (<CoreConcept key={conceptItem.title} {...conceptItem} /> ))}
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onClick = {() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic=== 'jsx'} onClick = {() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic=== 'props'} onClick = {() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic=== 'state'} onClick = {() => handleSelect('state')}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
