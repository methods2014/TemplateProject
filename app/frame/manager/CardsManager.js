import React from 'react'
import EntryCard from '../card/generic/EntryCard'
import CarouselCard from '../card/generic/CarouselCard'
import SimpleCard from '../card/SimpleCard'
import EntryListCard from '../card/generic/EntryListCard'
/**
 * 卡片管理器，所有卡片在此注册
 */
export default class CardsManager{

  static getCard(card, _onPress, index, host){
    if(!card || !card.name){
      return null;
    }
    switch (card.name) {
      case 'EntryCard':
        return <EntryCard key={index} data={card.data} onPress={_onPress} ref={card.id} host={host}/>
      case 'CarouselCard':
        return <CarouselCard key={index} data={card.data} onPress={_onPress} ref={card.id} host={host}/>
      case 'SimpleCard':
        return <SimpleCard key={index} data={card.data} onPress={_onPress} ref={card.id} host={host}/>
      case 'EntryListCard':
        return <EntryListCard key={index} data={card.data} onPress={_onPress} ref={card.id} host={host}/>
    }
  }
}
