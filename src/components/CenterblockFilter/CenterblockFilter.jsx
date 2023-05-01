import React, { useState } from 'react';
import CategoryButton from '../CategoryButton/CategoryButton';
import Dropdown from '../Dropdown/Dropdown';

const CenterblockFilter = ({ tracks }) => {
    const [activeCategory, setActiveCategory] = useState(null);
    const categories = [
        {
            name: 'Исполнители',
            data: ['Исполнитель 1', 'Исполнитель 2', 'Исполнитель 3'],
        },
        { name: 'Год выпуска', data: ['2020', '2019', '2018'] },
        { name: 'Жанры', data: ['Жанр 1', 'Жанр 2', 'Жанр 3'] },
    ];
    const handleCategoryClick = (categoryName) => {
        if (activeCategory === categoryName) {
            setActiveCategory(null);
        } else {
            setActiveCategory(categoryName);
        }
    };
    return (
        <div className="centerblock__filter filter">
            <div className="filter__title">Искать по:</div>
            <div className="filter__buttonBox">
                {categories.map((category) => (
                    <div key={category.name} className="">
                        <CategoryButton
                            category={category.name}
                            isActive={activeCategory === category.name}
                            onClick={() => handleCategoryClick(category.name)}
                        />
                        {activeCategory === category.name && (
                            <Dropdown data={category.data} />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CenterblockFilter;