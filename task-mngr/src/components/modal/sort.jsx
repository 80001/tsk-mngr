import React, { useEffect, useRef, useState } from 'react'

const SortTask = ({ setSorted, sortTasks, sort }) => {
    const [componentRendered, setComponentRendered] = useState(false);


    const handleClick = () => {
        setSorted(false);
    };
    useEffect(() => {
        if (componentRendered) {
            window.addEventListener('click', handleClick);
        } else {
            setComponentRendered(true);
        }

        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, [componentRendered]);
    const sorting = (sortBy, sortTo) => {
        sortTasks(sortBy, sortTo)
    }

    return (
        <div className='modal' id='modal'>
            <div className="modal-menu">
                <div className='modal-menu__hover'>
                    <h3 onClick={() => sorting(sort, 1)}>Asc</h3>
                </div>
                <div className='modal-menu__hover'>
                    <h3 onClick={() => sorting(sort, 0)}>Desc</h3>
                </div>
                <div className='modal-menu__hover'>
                    <h3 onClick={() => sorting('default')}>Clear Sort</h3>
                </div>
            </div>
        </div>
    )
}

export default SortTask