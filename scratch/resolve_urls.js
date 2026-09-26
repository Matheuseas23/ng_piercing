const https = require('https');

const urls = [
  "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHlCYqus4Miv9XGj5yPHin0LIgJSKGIIMceYouSdey9rbz1NDuKhsFVoyTODH4Bwr1vrtJTV5VTP2rHlo6XJwPVlosG5zVAjMVzFu6-MR-ik6OO6NeRrmWUcUB53cgP8omX0Xnbnc0-ShHhszA1OHst-3tMm-mGUC-b8IyhUCqu3JZFrIylnvYqbohgaWnW2dW9SDg6ho0s3pE7H_77jh3jlnQ0TMG86YQvlyx_sARukefG7Bn_5JBrWC1A2vJtGk11s11cjHkRy7N3c4EVxLeZTgjVLmqM8VDmWxn7CaQ0caXEmkt3GTxlKnA=",
  "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFPZ5F7VCFR1llJz4PvPmq1WAsEaLnly0060yLf1l_uR4DpsnQt-YRLsDuB2v6iz6G9OFK00ueVyk54RYzP8FPBOxtiFtmehx6FAvj3rinlT4leK0BH-0im-0D26RG_Y2ZegMOuEFwLuw6p5VHo_bYVpYHzKPRfP78oTmI5v_gs43KhhHKJeC1sJVsbNPH9mx94n-TpvFZWxkvgQqeU35DJ_Q0ylVeh2DVjHCdc8ExOn2m526mELR_pv4-_jhvCn3asLJffZqNBfcAvYJGoDZqgXI1OtONtWrMmqwewWPAZ8Q==",
  "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFeUWr8c4UHkJ6c8jWbJlzkp_HotYbjvy2gd61aHMhm5V9I7hBExa8uM45AThw5DyYOoMvqwjqG1LcBCFwgM1W_0-RnAOmIwjxNwUUfAjb9Fz46leXGEifDhcdvOb_ooOR9xBetgkMSnvdhD8ihxoAdYYKpsaCE4pNNDfPzdv-gYnnkMW0gUk9LXQwKzmG4jMBTiUXlSg==",
  "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHlX49_qM4HL8sqsJua65Wnqv8iQf8QCHHj7lHpcJzwY4qbJwlGz1z0ajS3011eq3_E-iX_ntwhUAHOMr0Yc0ZafN3iCAFtu9RdvKRGlYdWeWjQxOpmXaQoVDMkCR32Pc7PaAtEqPf-rBGsRLDHFUVwxHyhRrssmAwWnXHSxm0IK_8A5S3DoP3lE6LORLqMQodmcZpWdLiBd_ZX_ISywJ3PpfgqNgqzQSC7GGVlNp88JMGD",
  "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGTJ2jHOBWUyu9Krqm2HT51_DXYnwrdFqCVMgcyIdAJsGE6acSa3SHQN_8trAKw_7xAaDxN3Iv3BGM1tWTxQFfMl7WBA6uDRk39Xl-9Sa_njRdg4U-wO3iPA4GRLzMi81TRBr99-TPUeo1t_zfygZnL1C7FEX_hQHdCKBdBq51rzWwiyJErt916l_ILnxah4_B6PxT9UYSqlqxH_E8s6ee0F98sUFvT2TO596AF6bE="
];

urls.forEach(u => {
  https.get(u, res => {
    console.log(res.statusCode, res.headers.location || 'no loc');
  }).on('error', err => console.error(err.message));
});
