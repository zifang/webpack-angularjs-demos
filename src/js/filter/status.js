class statusFilter {  // 订单状态
  static status(input) {
    switch (input) {
      case '1':
        return '已完成';
      case '2':
        return '未完成';
      case '3':
        return '订单待支付';
      case '4':
        return '订单待审核';
      case '5':
        return '已取消';
      default:
        return '未知';
    }
  }
}

class payStatusFilter { // 订单支付状态
  static status(input) {
    switch (input) {
      case '1':
        return '已支付';
      case '2':
        return '待支付';
      default:
        return '未知';
    }
  }
}

class orderTypeFilter { // 订单类型
  static status(input) {
    switch (input) {
      case '1':
        return '微信';
      case '2':
        return '支付宝';
      default:
        return '未知';
    }
  }
}

class mendianTypeFilter {
  static status(input) {
    switch (input) {
      case '1':
        return '小吃快餐';
      case '2':
        return '正餐';
      default:
        return '暂无类型';
    }
  }
}

class mendianStatusFilter {
  static status(input) {
    switch (input) {
      case '1':
        return '正常营业';
      case '2':
        return '暂停营业';
      default:
        return '暂无类型';
    }
  }
}
export {statusFilter, payStatusFilter, orderTypeFilter, mendianTypeFilter, mendianStatusFilter};