const api = async (
    path: string,
    method = 'GET',
    data?: any,
    fetchOptions: Record<string, any> = {},
): Promise<any> => {
    const body = method !== 'GET' ? { body: JSON.stringify(data) } : { body: null };
    const res = await fetch(`http://localhost:5001/api/${path}`, {
        method,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        ...body,
        ...fetchOptions,
    });
    return res.json().then((response) => {
        if (response.error === 'NOT_AUTHORIZED') {
            console.error('not authed');
        }
        return response;
    });
};

export default api;
