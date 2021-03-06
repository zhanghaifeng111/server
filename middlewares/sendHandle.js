// 返回数据统一处理
module.exports = () => {
  // 处理请求成功方法
  const render = ctx => {
    return (data, msg = '请求成功') => {
      ctx.set('Content-Type', 'application/json');
      ctx.body = {
        code: 1,
        data,
        msg
      }
    }
  }

  // 处理请求失败方法
  const renderError = ctx => {
    return (code, errMsg = '请求失败') => {
      ctx.set('Content-Type', 'application/json');
      ctx.body = {
        code,
        errMsg
      }
    }
  }

  return async (ctx, next) => {
    ctx.send = render(ctx);
    ctx.sendError = renderError(ctx);
    await next();
  }
}
