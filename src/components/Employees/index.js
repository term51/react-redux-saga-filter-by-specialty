import React, {useEffect, useMemo} from 'react';
import useFetch from '../../hooks/useFetch';
import {EMPLOYEES} from '../../modules/api/endpoints';
import ProfileGrid from '../common/ProfileGrid';
import {useSelector} from 'react-redux';
import {selectAppState} from '../../modules/app/selectors';

const Employees = () => {
   const {response, performFetch} = useFetch(EMPLOYEES);
   const {loading, data} = response;
   const appState = useSelector(selectAppState);


   useEffect(() => {
      performFetch();
   }, [performFetch]);

   const preparedDate = useMemo(() => {
      if (!Array.isArray(data)) {
         return [];
      }
      if (!appState.selectedJob) {
         return data;
      }

      return data.filter(employee => employee.job === appState.selectedJob);
   }, [data, appState.selectedJob]);


   return (
      <ProfileGrid profiles={preparedDate} loading={loading}/>
   );
};

export default Employees;