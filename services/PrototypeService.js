export default class PrototypeService{

    static selection(payload = {}) {

        let itemsPerPage = (payload.itemsPerPage === undefined) ? '10' : payload.itemsPerPage;
        let page = (payload.page === undefined) ? 1 : payload.page;
        let filters = (payload.filters === undefined) ? '' : payload.filters;
        itemsPerPage = '';
        return {
            method: 'get',
            url : '/api/selections/prototype?page=' + page + '&itemsPerPage=' + itemsPerPage,
            config: {
                params: {
                    filters: filters
                },
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        };
    }
}
