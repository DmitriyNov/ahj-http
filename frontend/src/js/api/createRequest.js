const createRequest = async (options = {}) => {
    const xhr = new XMLHttpRequest();
    try {
        if (options.method === "GET") {
            let url = "http://localhost:7070?";
            for (let item in options.info) {
                url += item + '=' + options.info[item] + '&';
            }
            url = url.slice( 0, url.length - 1 );
            xhr.open(options.method, url);
            xhr.send();
        } else {
            const formData = new FormData();
            let url = "http://localhost:7070?";
            for (let item in options.info) {
                url += item + '=' + options.info[item] + '&';
            }
            url = url.slice( 0, url.length - 1 );
            for (item in options.data) {
                formData.append(item, options.data[item]);
            }
            xhr.open(options.method, url);
            xhr.send(formData);
        }
    } catch(error) {
        console.log(error);
    }
    xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            try {
                const data = JSON.parse(xhr.responseText);
                options.callback(data);
            } catch (e) {
                console.error(e);
            }
        }
    });
};

export default createRequest;