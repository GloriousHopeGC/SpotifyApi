const axios = require('axios');

axios.get('https://api.spotify.com/v1/search?q=Blue+sky&type=track', {
    headers: {
    'Authorization': 'Bearer BQD1SERRiDzWn9BM-M1io3iV4g3_a31e2oV2d90y8DXGaR8HR8iiz5nn2EwZg17wufWmm3LG-mKQaYI_pyE_syzG6bEbck7BDSqKeBaVuZGyeXbj7krPLF8g6fhZhsBuPhhj5pDnnMgJeHjWKBXG8T4wEZ2Py0KZrWQmLaWVM_Bwjwo_-S03y1zvm6fmr-dxnnz1QVw5ZLsBAUn3C3M'
}
}).then((data)=>{
    console.log(data.data.tracks.items[0].id);
})

