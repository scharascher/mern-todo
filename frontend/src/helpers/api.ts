const api = async (path: string, method = 'GET', data?: any): Promise<any> => {
    const res = await fetch(`http://localhost:5001/${path}`, {
        method,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return res.json();
};

export default api;
