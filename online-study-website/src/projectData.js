export const models = [
    {
        modelName: 'Logistic Regression',
        modelDetails: 'Created using different technique to classify',
        
        modelPicPath: '/frontPics/logistic.jpg',
        modelPageURL: '/model?pageName=Logistic+Regression'
    },
    {
        modelName: 'Neural Network',
        modelDetails: 'Created using different technique to classify',
        modelPicPath: '/frontPics/nn.jpg',
        modelPageURL: '/model?pageName=Neural+Network'
    },
    {
        modelName: 'Naive Gaussian Bayesian Network',
        modelDetails: 'Created using different technique to classify',
        modelPicPath: '/frontPics/bayes.png',
        modelPageURL: '/model?pageName=Naive+Gaussian+Bayesian+Network'
    },
    {
        modelName: 'Support Vector Machines',
        modelDetails: 'Created using different technique to classify',
        modelPicPath: '/frontPics/svm2.png',
        modelPageURL: '/model?pageName=Support+Vector+Machines'
    },
]

export const modelPageContents = {
    'Pre-Processing': {
        'title': 'Pre-Processing',
        'details': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet ex vel lectus aliquet porttitor. Proin sollicitudin vitae purus at cursus. Nullam suscipit ultricies lectus in efficitur. Phasellus hendrerit enim lectus. Nunc vitae eleifend metus.',
        'imgList': ['/graphs/output.png', '/graphs/heatmap.png'],
        'confusion': '/graphs/output.png',
        'report': '/graphs/heatmap.png',
        'graphs': ['/graphs/output.png', '/graphs/heatmap.png']
    },
    'Logistic Regression': {
        'title': 'Logistic Regression',
        'details': 'Our confusion matrix from the Logistic Regression shows that we predicted 150 averages, 35 bad, and 29 good. The model in terms of prediction did fair as its predicted 62% correctly. The model was able to correctly predict "average" correctly most of the time with a accuracy rate of 71%.',
        'imgList': ['/graphs/logistic matrix.svg', '/graphs/logistic report.svg'],
        'confusion': '/graphs/output.png',
        'report': '/graphs/heatmap.png',
        'graphs': ['/graphs/output.png', '/graphs/heatmap.png']
    },
    'Neural Network': {
        'title': 'Neural Network',
        'details': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet ex vel lectus aliquet porttitor. Proin sollicitudin vitae purus at cursus. Nullam suscipit ultricies lectus in efficitur. Phasellus hendrerit enim lectus. Nunc vitae eleifend metus.',
        'imgList': ['/graphs/heatmap.png', '/graphs/output.png'],
        'confusion': '/graphs/output.png',
        'report': '/graphs/heatmap.png',
        'graphs': ['/graphs/heatmap.png', '/graphs/output.png']
    },
    'Naive Gaussian Bayesian Network': {
        'title': 'Naive Gaussian Bayesian Network',
        'details': 'Using the Naive Gaussian Bayesian model, the accuracy of the model is 64%. The predicted model was able to predict 132 averages while the acutal was 105 average. The model was able to predict average the highest with an accuracy of 72%. It was also able to predict bad and good 56% and 51% respectively. Oversampling does not help the accuracy as much. Using several kernals does not increase the accuracy.',
        'imgList': ['/graphs/heatmap.png', '/graphs/output.png'],
        'confusion': '/graphs/output.png',
        'report': '/graphs/heatmap.png',
        'graphs': ['/graphs/heatmap.png', '/graphs/output.png']
    },
    'Support Vector Machines': {
        'title': 'Support Vector Machines',
        'details': 'Using SVM, our accuracys was low. We oversampled the data with the linear and rbf kernal which gives us 27% accuracy for both kernals. The confusion matrix shows the linear kernal. The SVM predicted 162 averages while the actual data was only 112 averages. SVM did not correctly predict the satisfication level of students to a high enough accuracy.',
        'imgList': ['/graphs/heatmap.png', '/graphs/output.png'],
        'confusion': '/graphs/output.png',
        'report': '/graphs/heatmap.png',
        'graphs': ['/graphs/heatmap.png', '/graphs/output.png']
    },
}