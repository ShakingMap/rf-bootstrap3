import React from 'react';

const propTypes = {
    validationState: React.PropTypes.any,

    children: React.PropTypes.arrayOf(React.PropTypes.node),

    // func(index)
    onInsert: React.PropTypes.func,

    // func(index)
    onRemove: React.PropTypes.func,

    // func(fromIndex, toIndex)
    onMove: React.PropTypes.func,

    disabled: React.PropTypes.bool
};

const defaultProps = {
    children: [],
    onInsert(){},
    onRemove(){},
    onMove(){}
};

class Array extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // move, add or remove
            editMode: ''
        }
    }

    render() {
        const {validationState, onInsert, onRemove, onMove, children, disabled} = this.props;
        const {editMode} = this.state;

        return <div className="panel panel-default">
            <div className="panel-body">
                <div className="array-actions" style={{marginBottom: '10px'}}>
                    {
                        !disabled ?
                            !editMode ? [
                                <button key={0} type="button" style={{marginRight: '10px'}}
                                        className="btn btn-primary"
                                        onClick={()=>this.setState({editMode: 'add'})}>
                                    <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
                                </button>,
                                <button key={1} type="button" style={{marginRight: '10px'}} className="btn btn-primary"
                                        onClick={()=>this.setState({editMode: 'remove'})}>
                                    <span className="glyphicon glyphicon-minus" aria-hidden="true"></span>
                                </button>,
                                <button key={2} type="button" className="btn btn-primary"
                                        onClick={()=>this.setState({editMode: 'move'})}>
                                    <span className="glyphicon glyphicon-move" aria-hidden="true"></span>
                                </button>
                            ]
                                :
                                <button type="button" className="btn btn-primary"
                                        onClick={()=>this.setState({editMode: null})}>
                                    <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
                                </button>
                            :
                            null
                    }
                </div>
                {children.map((child, index)=><div key={index}>
                    {
                        !disabled && editMode === 'add' ?
                            <button type="button" className="btn btn-primary" style={{marginBottom: '10px'}}
                                    onClick={()=>onInsert(index)}>
                                <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
                            </button> : null
                    }
                    <div style={{display: 'flex'}}>
                        {
                            !disabled && editMode === 'remove' ?
                                <div className="array-item-actions" style={{marginRight: '10px'}}>
                                    <button type="button" className="btn btn-danger"
                                            onClick={()=>onRemove(index)}>
                                        <span className="glyphicon glyphicon-minus" aria-hidden="true"></span>
                                    </button>
                                </div> : null
                        }
                        {
                            !disabled && editMode === 'move' ?
                                <div className="array-item-actions" style={{marginRight: '10px'}}>
                                    <button key={0} type="button" className="btn btn-primary"
                                            style={{marginBottom: '10px'}}
                                            onClick={index > 0 ? ()=>onMove(index, index-1):null}>
                                                <span className="glyphicon glyphicon-arrow-up"
                                                      aria-hidden="true"></span>
                                    </button>
                                    <button key={1} type="button" className="btn btn-primary"
                                            onClick={index < children.length -1? ()=>onMove(index, index+1): null}>
                                                <span className="glyphicon glyphicon-arrow-down"
                                                      aria-hidden="true"></span>
                                    </button>
                                </div> : null
                        }
                        <div className="panel panel-default">
                            <div className="panel-body">
                                {child}
                            </div>
                        </div>
                    </div>
                </div>)}
                {
                    !disabled && editMode === 'add' ? <button type="button" className="btn btn-primary"
                                                              onClick={()=>onInsert(children.length)}>
                        <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
                    </button> : null
                }
            </div>
        </div>
    }
}

Array.propTypes = propTypes;
Array.defaultProps = defaultProps;

module.exports = Array