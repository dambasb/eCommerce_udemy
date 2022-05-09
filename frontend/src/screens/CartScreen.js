import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import { useLocation, useParams } from 'react-router-dom'
import { addToCart } from '../actions/cartActions'

const CartScreen = ({ history }) => {
  const params = useParams()
  const productId = params.id

  const location = useLocation()
  const qty = location.search ? Number(location.search.split('=')[1]) : 1

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)

  const { cartItem } = cart

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    } else {
    }
  }, [dispatch, productId, qty])

  return <div>CartScreen</div>
}

export default CartScreen
