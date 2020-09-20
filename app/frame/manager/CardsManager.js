import React from 'react'
import EntryCard from '../card/generic/EntryCard'
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
    }
  }
}
