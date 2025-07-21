import { render, screen, fireEvent } from '@testing-library/react';
import ContextMenuExample from './ContextMenuExample';

describe('ContextMenuExample', () => {
  it('should render the context menu on right-click', () => {
    render(<ContextMenuExample />);

    const container = screen.getByText('右键点击显示菜单');
    fireEvent.contextMenu(container);

    expect(screen.getByText('删除节点')).toBeInTheDocument();
    expect(screen.getByText('在工具中打开')).toBeInTheDocument();
    expect(screen.getByText('执行此节点')).toBeInTheDocument();
    expect(screen.getByText('从该节点执行')).toBeInTheDocument();
    expect(screen.getByText('查看结果')).toBeInTheDocument();
  });

  it('should execute a node and display results', () => {
    render(<ContextMenuExample />);

    const container = screen.getByText('右键点击显示菜单');
    fireEvent.contextMenu(container);

    const executeNodeButton = screen.getByText('执行此节点');
    fireEvent.click(executeNodeButton);

    expect(screen.getByText(/执行完成/)).toBeInTheDocument();
  });

  it('should display results when clicking on 查看结果', () => {
    render(<ContextMenuExample />);

    const container = screen.getByText('右键点击显示菜单');
    fireEvent.contextMenu(container);

    const viewResultButton = screen.getByText('查看结果');
    fireEvent.click(viewResultButton);

    expect(screen.getByText(/仿真结果/)).toBeInTheDocument();
  });
});
