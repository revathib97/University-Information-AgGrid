import React, { useState, useEffect,useMemo} from 'react';
import { AgGridReact } from 'ag-grid-react'; 
import 'ag-grid-enterprise';
import 'ag-grid-community/styles/ag-grid.css'; 
import 'ag-grid-community/styles/ag-theme-alpine.css'; 



const AgGrid = () => {
  const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
  const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);
  const [rowData, setRowData] = useState(); 
  const [columnDefs, setColumnDefs] = useState([
   {field: 'name',sortable: true},
   {field: 'country', filter: true, sortable: true},
   {field: 'domains'},
   {field: 'web_pages'},
   {field: 'alpha_two_code'}
   
 ]);
 
 const defaultColDef = useMemo(() => {
  return {
    flex: 1,
    minWidth: 200,
    resizable: true,
    floatingFilter: true,
  };
}, []);
 
 
useEffect(() => {
  fetch('http://universities.hipolabs.com/search?country')
   .then(result => result.json())
   .then(rowData => setRowData(rowData))
 }, []);

 
 return (
   

<div style={containerStyle}>

     
     <div className="ag-theme-alpine" style={{width: 1000, height:900}}>

       <AgGridReact
           

           rowData={rowData} 

           columnDefs={columnDefs} 
           
           defaultColDef={defaultColDef}
                  

           />
     </div>
   </div>
 );
};

export default AgGrid;