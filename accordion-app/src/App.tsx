import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {AiFillCheckCircle} from 'react-icons/ai';
import {AiFillCloseCircle} from 'react-icons/ai';

import './App.css';

import fakeData from './ClientObj'

function App() {

    // console.log(Object.values())

    return (
        <div className='app'>
            <div className='app_content'>

            <h2>Health Page | BlueJay Data Tests</h2>
            <div className='accordion_group'>

                {/* Map Accordion with object values */}
                <div className='accordion_cluster'>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>
                                <AiFillCheckCircle style={{marginRight: '20px', marginBottom: '-2px', color: 'green'}}/>
                                iMaintain Get Function 1
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>
                                <AiFillCloseCircle style={{marginRight: '20px', marginBottom: '-2px', color: 'red'}}/>
                                iMaintain Get Function 1
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>

                <div className='accordion_cluster'>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>
                                <AiFillCheckCircle style={{marginRight: '20px', marginBottom: '-2px', color: 'green'}}/>
                                iMaintain Get Function 1
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>
                                <AiFillCloseCircle style={{marginRight: '20px', marginBottom: '-2px', color: 'red'}}/>
                                iMaintain Get Function 1
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>


            </div>
            </div>
        </div>
    );
}

export default App;
