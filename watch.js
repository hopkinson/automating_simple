var fs = require('fs')

let distDir = './node_0225/src'
    // 动态观察文件的变化
fs.watch(distDir, (eventType, fileName) => {
    // 只要一个文件发生变化，需要对文件夹下的所有文件“进行读取，然后合并”
    fs.readdir(distDir, (err, fileList) => {
        var arr = []
        // 遍历文件夹里的文件
        fileList.forEach(item => {
            if(item){

                let dir = `${distDir}/${item}`,
                // 获取文件信息
                 statInfo=fs.statSync(dir),
                    content=""
                arr.push(dir)
                //遍历数组=>读取每个文件的内容
                arr.forEach(item=>{
                  let read= fs.readFileSync(item,'utf-8')
                    content+=read.toString()+'\n'
                })
                //把content写进index.js里
                fs.writeFile('./js/index.js',content,'utf-8')
            }
        })
    })
})
