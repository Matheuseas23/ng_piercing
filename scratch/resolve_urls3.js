const https = require('https');

const urls = [
  "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFse3o5PF6Q0uG7A185ajtVimZs2TdV-YyjmyZA7CElTaQPPmNJzgjo1-jhFIXT2LQZUdJfHP1eEol_-kVeyI6wM4mQ1rhJ9EJepJa4t0KK-5F6kNL2ytDTDuRs-6ahCJA-7EesIeB305I_6XtX702Bqey_WonGnHMjpwQys6ZMXCSKv4vFD-P2Yo44ynKGGu8AbZaAR-j2SV0PxuzvKpZFsOwOmPIrpfFSn1X8e0Y=",
  "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFM_3umkVwgl3IjJ9dO5hT2d5GWAljrHEluALJvwDUDTI_tabKKLwvk96KUVuSBF-uqzcTYoM9sjyWkjkJf5Ff_9mfN7bcThpvulof0S7Vwdx3CLQ_Wc8vDoFa5tufyqkeMRahknux54sqpb7O-yXgNopNMfcp9I3QSj6TZjQZN86aeXEesFjzss965kv5RveKoBkape6DYY4JAbVT7Y0ZH4BbembEEzslsl5mKkG3AS6ChMcSfWPr1QlKkeX4PbA==",
  "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHnKdfbv5R5wHEhg1rAJFxQtCu6McSDwtub6lBg4W7AjostOW4e0ITdx8wMIAMHKngh0CM4pgnZn6Czcv7vHvO9xDBPMdYkz7y5xCotCJLd0YzlHLQveFMjjHpHKyztjsLAND9SwzgG2Vv5ll6vy0v1otTt9Or_P3cOPXwQHXgdtTA6R-LiclymYLv-NKALyGsjzqA-4BrAI-zAefY0E8Z9TPCCLr2eupbDeRgs_letnEztIw==",
  "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFyDLQ-4K2v-XRYPtqPuDgOynm7sgQdi6hGOtBqnIM9XOQdbS89fo6MRTDj0wu63PusPkR_3tWJhio4dFMbz_Hf5s5D9HY5wZxHm2kSvbvw0ZQYGtm-xjtzNNayild2HWqRIV-l7ZXdWhs4vNETNvr32f-ZtnJPB4bCaQSnMTyXaDio5oWikaXnaqHrnuvPsC9YQBMXB0aB0pHze9fcB-AD3WtcwQnGEyK41H36_pp-wrWTOKexfG8Cb7nA26qG8UESmBfaYoNyzCs=",
  "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE99K7ecHMNo1-JzNmBcrwplt2NlyDC3lMdesghOuhXJW-6RL2eL0y0pS3gb9tLm_KuwQFx7u_h6y4iCtF6a_5ZDMy0M_SUP6f_wces5qtToMcNJbG1q1rhz4QS6JZXyQXj7eWf2mPzk9TSA2WzjdcSLoj8RoxYkIg9Xr719W1xjerR86AsaHc822MjDLfz263tSXtWU3Cf_MGKrIYxlH4=",
  "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEDAanWFQukodYftwVRlcXRPdi9R315LMa-1FCsXm-woBL_wI3xz8JhPm6zVHiRG9LrWyWBJO1jaC7yLkRXOW-iTbVF343sqbDDSxSR3sPLtIdtBp8C3zTcnlN24LFZzqhPbgXbYWOGRTrlR0qWB8k5NM5yl-mvMBqeuxcrEiq-XdXFfCe3F828ZEwJxol8Ppa0x0zbbQ=="
];

urls.forEach(u => {
  https.get(u, res => {
    console.log(res.statusCode, res.headers.location || 'no loc');
  }).on('error', err => console.error(err.message));
});
