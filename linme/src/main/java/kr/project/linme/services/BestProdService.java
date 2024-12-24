package kr.project.linme.services;

import java.util.List;

import kr.project.linme.models.BestProd;

public interface BestProdService {
    public BestProd addItem(BestProd params) throws Exception;

    public BestProd editItem(BestProd params) throws Exception;

    public int deleteItem(BestProd params) throws Exception;

    public BestProd getItem(BestProd params) throws Exception;

    public List<BestProd> getList(BestProd params) throws Exception;

    public int getCount(BestProd params) throws Exception;
}
