import React, { useState, useRef, useEffect } from 'react';
import { Form, InputGroup, Collapse } from 'react-bootstrap';
import { useGetRocketsQuery, Rocket } from './services/rocketApi';
import styles from './combobox.module.scss';

const Combobox: React.FC = () => {

  const { data } = useGetRocketsQuery();

  const [selectedItem, setSelectedItem] = useState<string>(''); // значение поля ввода
  const [isActive, setActive] = useState<boolean>(false); //  активность списка
  const [listSearch, setListSearch] = useState<Rocket[]>([]); // список
  const [activeItem, setActiveItem] = useState<Rocket | null>(null); // выбранный эл. списка
  const [activeIndex, setActiveIndex] = useState(0); // индекс выбранного эл.

  useEffect(() => {
    if (data) {
      setListSearch(data)
    }
  }, [data]);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setActiveIndex(0);
    setSelectedItem(event.target.value);
    setActive(true);
    if(data) {
      if (event.target.value === '') {
        setListSearch(data);
        setActiveItem(null);
        return;
      }
      const newData = data.filter((item) => item.name.toLowerCase().includes(event.target.value.toLowerCase()));
      setListSearch(newData);
      if(newData.length) {
        setActiveItem(newData[0]);
      } else {
        setActiveItem(null);
      }
    }
  };

  const handleClick = (id: string) => {
    const currIndex = listSearch.findIndex((item) => item.id === id);
    if(currIndex !== -1) {
      setActiveIndex(currIndex);

      setActiveItem(listSearch[currIndex]);
      setSelectedItem(listSearch[currIndex].name)
      setActive(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'ArrowDown' && isActive) {
      setActiveIndex((prevIndex) =>
        prevIndex < listSearch.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (e.key === 'ArrowUp' && isActive) {
      setActiveIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : 0
      );
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (activeIndex >= 0 && activeItem) {
        setActiveItem(listSearch[activeIndex]);
        setSelectedItem(listSearch[activeIndex].name)
        setActive(false);
      }
    } else if (e.key === 'Escape') {
      if (inputRef.current) {
        inputRef.current.blur();
        if (!activeItem) {
          setSelectedItem('');
        }
      }
      setActive(false);
    }
  };

  return (
    <>
      <Form.Group className="col-6 position-relative">
        <InputGroup>
          <Form.Control
            value={selectedItem}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="Поиск..."
            ref={inputRef}
            onBlur={() => setTimeout(() => setActive(false), 100)}
            onFocus={() => setActive(true)}
          />
        </InputGroup>
        <Collapse in={isActive}>
        <ul className={styles.listGroup}>
          {listSearch.map(({ id, name }, i) => 
            <li key={id}
              onClick={() => handleClick(id)}
              className={ i === activeIndex ? styles.activeColor : ''}
            >
              {name}
            </li>
          )}
        </ul>
        </Collapse>
      </Form.Group>
    </>
  )
}
export { Combobox };