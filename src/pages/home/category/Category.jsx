import React, { useEffect, useState } from 'react';
import Toy from './Toy';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Category = () => {
    const [toys, settoy] = useState([]);
    // const [activeTab, setActiveTab] = useState("alltoy");
    const [filteredItems, setFilteredItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    console.log(filteredItems)

    useEffect(() => {
        fetch(`http://localhost:5000/toys`)
            .then((res) => res.json())
            .then((result) => {
                settoy(result);
            });
    }, []);


    useEffect(() => {
        const filterItems = () => {
            if (selectedCategory === '') {
                // Show all items if no category is selected
                setFilteredItems(toys);
            } else {
                // Filter the items based on the selected category
                const filtered = toys.filter((toy) => toy.category === selectedCategory);
                setFilteredItems(filtered);
            }
        };

        filterItems();
    }, [toys, selectedCategory]);

    const handleTab = (tabName) => {
        setSelectedCategory(tabName);
    };

    return (
        <div className='container mx-auto'>
            <h1 className='text-center text-primary font-bold text-3xl'>Shop by Category</h1>
            <Tabs forceRenderTabPanel defaultIndex={0} selectedTabClassName="text-primary">
                <TabList>
                    <Tab onClick={() => handleTab("")}>All toys</Tab>
                    <Tab onClick={() => handleTab("goofy")}>Category</Tab>
                </TabList>
                <TabPanel>
                    <Tabs forceRenderTabPanel>
                        <TabList>
                            <Tab >All Toys</Tab>
                        </TabList>
                        <TabPanel>
                            <div className='grid grid-cols-3 container mx-auto'>
                                {
                                    filteredItems.map((toy) => (<Toy
                                        key={toy._id}
                                        toy={toy}
                                    ></Toy>))
                                }
                            </div>
                        </TabPanel>
                    </Tabs>
                </TabPanel>
                <TabPanel>
                    <Tabs forceRenderTabPanel>
                        <TabList >
                            <Tab onClick={() => handleTab("goofy")}>Goofy</Tab>
                            <Tab onClick={() => handleTab("mickeymouse")}>Mickey Mouse</Tab>
                            <Tab onClick={() => handleTab("donaldduck")}>Donald Duck</Tab>
                        </TabList>
                        <TabPanel>
                            <div className='grid grid-cols-3 container mx-auto'>
                                {
                                    filteredItems.map((filter) => (<Toy
                                        key={filter._id}
                                        toy={filter}
                                    ></Toy>))

                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid grid-cols-3 container mx-auto'>
                                {
                                    filteredItems.map((toy) => (<Toy
                                        key={toy._id}
                                        toy={toy}
                                    ></Toy>))
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid grid-cols-3 container mx-auto'>
                                {
                                    filteredItems.map((toy) => (<Toy
                                        key={toy._id}
                                        toy={toy}
                                    ></Toy>))
                                }
                            </div>
                        </TabPanel>
                    </Tabs>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Category;