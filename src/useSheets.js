import { useEffect, useState } from 'react';

const useGoogleSheets = (apiKey, spreadsheetId, range, filter) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadGapi = () => {
            return new Promise((resolve) => {
                window.gapi.load('client', () => {
                    resolve();
                });
            });
        };

        const initializeGapiClient = async () => {
            try {
                await loadGapi();
                await window.gapi.client.init({
                    apiKey: apiKey,
                    discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
                });
                console.log('GAPI client initialized.');
                fetchData();
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        const fetchData = async () => {
            try {
                const response = await window.gapi.client.sheets.spreadsheets.values.get({
                    spreadsheetId: spreadsheetId,
                    range: range,
                });
                const rows = response.result.values;
                const mappedData = rows.map(row => ({
                    img: row[0],
                    name: row[1],
                    type: row[2],
                    description: row[3],
                    price: row[4],
                }));
                // Filtrar los datos según el filtro proporcionado
                const filteredData = mappedData.filter(product => 
                    product.type.toLowerCase().includes(filter.toLowerCase())
                );
                setData(filteredData);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        initializeGapiClient();
    }, [apiKey, spreadsheetId, range, filter]);

    return { data, loading, error };
};

export default useGoogleSheets;






