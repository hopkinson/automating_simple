var fs = require('fs')
var projectData = {
    'name': 'node_0225',
    'dist': "./dist",
    "fileData": [{
        "name": "js",
        "type": "dir",
    }, {
        "name": "css",
        "type": "dir",
    }, {
        "name": "images",
        "type": "dir",
    }, {
        "name": "src",
        "type": "dir",
    }, {
        "name": "index.html",
        "type": "file",
        "content": "<!DOCTYPE html><html><head><title></title></head><body><h1>hello</h1></body></html>"
    }]
}

console.log('------------------')
console.log(projectData)

if (projectData.name) {
    // 创建文件夹
    fs.mkdir(projectData.name, (err) => {
        err ? "" : console.log("create suceess", projectData.name);
    })
    // JSON里的数据
    let fileData = projectData.fileData
    //

    if (fileData && fileData.forEach) {
        fileData.forEach((item) => {
            item.path = `${projectData.name}/${item.name}`
            switch (item.type) {
                case 'dir':
                    // 创建css/js/image
                    fs.mkdir(item.path, function(args) {
                        console.log(`create ${item.name} suceess`);
                    })
                    break;
                case 'file':
                    // 写入文件
                    fs.writeFile(item.path, item.content || '', function(args) {
                        console.log(`write ${item.name} suceess`);
                    })
                    break;
            }
        })
    }


}
