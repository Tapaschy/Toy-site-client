import React, { useEffect, useState } from 'react';
import Toy from './Toy';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Category = () => {
    const [toys, settoy] = useState([]);
    const [activeTab, setActiveTab] = useState("allJobs");
  
    useEffect(() => {
      fetch(`http://localhost:5000/toys`)
        .then((res) => res.json())
        .then((result) => {
            settoy(result);
        });
    }, [activeTab]);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
      };

    return (
        <div className='container mx-auto'>
            <h1 className='text-center text-primary font-bold text-3xl'>Shop by Category</h1>
            <Tabs forceRenderTabPanel defaultIndex={1}>
            <TabList>
                <Tab>All toys</Tab>
                <Tab>Category</Tab>
            </TabList>
            <TabPanel>
                <Tabs forceRenderTabPanel>
                    <TabList>
                        <Tab>All Toys</Tab>
                    </TabList>
                    <TabPanel>
                    <div className='grid grid-cols-3 container mx-auto'>
                        {
                            toys.map((toy)=>(<Toy 
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
                    <TabList>
                        <Tab>Mickey Mouse</Tab>
                    </TabList>
                    <TabPanel>
                    <div className='grid grid-cols-3 container mx-auto'>
                        {
                            toys.map((toy)=>(<Toy 
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