import React, { Component } from 'react'

export class DiUnmount extends Component {
  // Dijalankan ketika component sudah tidak digunakan lagi
  componentWillUnmount() {
    console.log('Ini Komponen berhasil dilepas')
  }
  render() {
    return (
      <div>
        Ini akan dilepas
      </div>
    )
  }
}
