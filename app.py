from flask import Flask, request, redirect, url_for, render_template
import requests

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/verify_payment', methods=['POST'])
def verify_payment():
    transaction_id = request.form['transaction_id']
    
    # 使用伪代码来演示如何调用支付接口进行交易ID验证
    try:
        response = requests.post('支付接口URL', json={
            'transactionId': transaction_id,
            # 添加必要的身份验证信息，例如API密钥
        })
        
        if response.json().get('success'):
            return redirect(url_for('success'))
        else:
            return '支付验证失败，请重试'
    except Exception as e:
        print(e)
        return '支付验证失败，请重试'

@app.route('/success')
def success():
    return render_template('success.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
