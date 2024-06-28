const scripts = ['04_get_rpc_and_getbalance'];

scripts.forEach(async (script) => {
  console.log(`正在测试 ${script}.js`);
  try {
    await import(`./${script}.js`);
  } catch (error) {
    console.error(`无法导入脚本文件 ${script}.js: ${error.message}`);
  }
  console.log(`完成测试 ${script}.js\n`);
});
